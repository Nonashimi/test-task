'use client';
import { useTestStore } from '@/app/store';
import { useEffect, useState, useRef, FC } from 'react';
import { Card } from '../Card';
import { useMutation } from '@tanstack/react-query';

export const CardItems: FC = () => {
  const [page, setPage] = useState(1);
  const [loadedPages, setLoadedPages] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { values, actions } = useTestStore();

  const orderMutation = useMutation({
    mutationFn: actions.getProducts,
  });

  useEffect(() => {
    if (loadedPages.includes(page) || orderMutation.isPending) return;

    const load = async () => {
      try {
        console.log("Загружается страница", page);
        await orderMutation.mutateAsync([page]);
        setLoadedPages((prev) => [...prev, page]);
      } catch (err) {
        console.error('Ошибка загрузки:', err);
      }
    };

    load();
  }, [page, loadedPages]);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (isBottom && !orderMutation.isPending) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [orderMutation.isPending]);

  return (
    <div ref={containerRef} className="p-4">
      <div className="grid grid-cols-4 gap-4 w-full">
        {values.products.items.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      {orderMutation.isPending && (
        <div className="text-center py-4">Загрузка...</div>
      )}
    </div>
  );
};
