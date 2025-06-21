'use client';
import { useTestStore } from "@/app/store";
import Box from "../../ui/Box";
import { Chevron } from "../../ui/Chevron";
import { Trash } from "lucide-react";
import 'react-phone-input-2/lib/style.css';
import { useState } from "react";
import Button from "../../ui/Button";
import PhoneInputCustom from "../../ui/PhoneInput";
import { useMutation } from "@tanstack/react-query";
import { Order } from "@/app/store/api/postBacket/type";
import Popup from "../../ui/Modal";

export const Backet = () => {
  const {values, actions} = useTestStore();
  const [phone, setPhone] = useState('+7');
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const orderMutation = useMutation({
    mutationFn: actions.postBacket,
    onSuccess: () => {
      setIsOpen(true);
    },
    onError: (e) => {
      alert(e.message);
    }
  });

  const onlyDigits = (phone: string) => phone.replace(/\D/g, '');

  const handleOrder = () => {
  const cleaned = onlyDigits(phone);

  if (cleaned.length !== 11) {
    setIsPhoneError(true);
    return;
  }

  setIsPhoneError(false);

  const params: Order = {
    phone: cleaned,
    cart: values.backet.map(backet => ({ id: backet.id, quantity: backet.count })),
  };

  orderMutation.mutate([params]);
};


const handleInput = (val: string) => {
  setPhone(val);
  const cleaned = onlyDigits(phone);
  if (cleaned.length !== 11) {
    setIsPhoneError(true);
    return;
  }
  setIsPhoneError(false);

}


  return(
    <Box>
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="py-6 text-[20px] flex justify-center text-white">
          Заказ успешно оформлен
        </div>
      </Popup>
      <div className="text-[18px]">Добавленные Товары</div>
      {
        values.backet.length > 0 ?
        <div className="flex flex-col gap-3">
          {
            values.backet.map(backet => 
              <div key={backet.id} className="grid grid-cols-12 gap-3 my-2 h-[30px] px-4">
                 <div className="col-span-5 font-bold">{backet.title}</div>
                 <div className="col-span-3 h-ful">
                  <Chevron id={backet.id}/>
                 </div>
                 <div className="col-span-2 flex justify-end font-bold">{backet.total_price}P</div>
                 <div onClick={() => actions.removeBacket(backet.id)} className="col-span-2 flex justify-end cursor-pointer">
                  <Trash/>
                 </div>
              </div>
            )
            
          }
          <hr/>
          <div className="grid grid-cols-6">
            <div className="col-span-3">
              <PhoneInputCustom
                className={`col-span-3 ${isPhoneError ? 'border-red-500 border-2 rounded' : ''}`}
                phone={phone}
                setPhone={handleInput}
              />
              {isPhoneError && (
                <div className="text-red-500 text-sm col-span-6 mt-1 absolute">Пожалуйста, введите корректный номер телефона</div>
              )}
            </div>

            <Button onClick={handleOrder} className="col-span-2 col-start-6">Заказать</Button>
          </div>
        </div>:
        <div className="w-full h-[50px] flex justify-center itemms-center text-[20px]">Пока что пусто</div>
      }
    </Box>
  );
};