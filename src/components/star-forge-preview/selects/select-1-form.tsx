'use client';

import { useForm } from 'react-hook-form';

import CustomSelect from '@/components/star-forge/select-1-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  user: z.string().min(1, { message: 'Por favor, selecione um ' })
});

type FormData = z.infer<typeof formSchema>;

const CustomSelectComponent = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: ''
    }
  });

  const onSubmit = (data: FormData) => {
    alert(data.user);
  };
  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <CustomSelect formName="user" label="Selecionar Usuário" />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Enviar
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default CustomSelectComponent;
