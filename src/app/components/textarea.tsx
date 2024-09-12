'use client';

import { ComponentPropsWithRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const style = tv({
  base: 'py-3 block w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold shadow-md shadow-slate-100 transition duration-200',
});

type TTextarea = VariantProps<typeof style>;
interface Props extends TTextarea, ComponentPropsWithRef<'textarea'> {}

const Textarea = (props: Props) => {
  return (
    <textarea {...props} className={twMerge(style({ ...props }), props.className)}>
      {props.children}
    </textarea>
  );
};

export default Textarea;
