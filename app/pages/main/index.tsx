'use client';

import { useTestStore } from "@/app/store";
import { useQuery } from "@tanstack/react-query";
import Container from '../../shared/ui/Container';
import { useEffect } from "react";
import { Review } from "@/app/shared/components/Review";
import { Backet } from "@/app/shared/components/Backet";
import { CardItems } from "@/app/shared/components/CardItems";

export const MainPage = () =>  {
  const {actions, values} = useTestStore();

  
  const {isLoading} = useQuery({
    queryKey: [actions.getReview.name],
    queryFn: () => {return Promise.all([
      actions.getReview(),
    ])},
  });

  useEffect(() => {
    console.log(values);
  },[values]);

  if(isLoading)
    return <div className="">...loading</div>

  return (
       <Container>
        <div className="w-full py-4 rounded-2xl text-white text-[60px] bg-[#7777] text-center">
          Тестовое Задание
        </div>
        <div className="w-[80%] mx-auto mt-12 min-h-[100vh]">
          <div className="text-[30px] text-white">
            Отзывы:
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {
              values.reviews.map((review) => (
                <Review key={review.id} text={review.text}/>
              ))
            }
          </div>
          <div className="w-[80%] mx-auto my-12">
            <Backet/>
          </div>

            <CardItems/>
        </div>

      </Container>
  );
};
