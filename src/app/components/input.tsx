'use client';

import { ComponentPropsWithRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const style = tv({
  base: 'block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-semibold text-black shadow-md shadow-slate-100 transition duration-200',
});

type TInput = VariantProps<typeof style>;
interface Props extends TInput, ComponentPropsWithRef<'input'> {}

export const Input = (props: Props) => {
  return <input {...props} className={twMerge(style({ ...props }), props.className)} />;
};
