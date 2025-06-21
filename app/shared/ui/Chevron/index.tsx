import { useTestStore } from "@/app/store";
import { TypeChevron } from "@/app/store/actions/handleBacketItem";
import { Minus, Plus } from "lucide-react";
import { FC } from "react"

type Props = {
  id: number,
}
export const Chevron:FC<Props> = ({id}) => {
  const {values, actions} = useTestStore();
  return (
    <div className="w-full grid grid-cols-7 gap-4 h-full">
          <div onClick={() => actions.handleBacket(id, TypeChevron.minus)} className={`col-span-2 bg-[#222] w-full rounded-2xl cursor-pointer flex justify-center items-center ${values.backet.find(b => b.id === id)?.count === 0?'pointer-events-none opacity-30':''}`}>
            <Minus className="text-white"/>
          </div>
          <div className="col-span-3 bg-[#222] w-full rounded-2xl text-white flex items-center justify-center">
            {values.backet.find(b => b.id === id)?.count}
          </div>
          <div className="col-span-2 bg-[#222] cursor-pointer w-full rounded-2xl flex justify-center items-center">
            <Plus onClick={() => actions.handleBacket(id, TypeChevron.plus)} className="text-white"/>
          </div>
  </div>);
};