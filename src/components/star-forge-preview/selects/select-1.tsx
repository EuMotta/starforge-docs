'use client';

import { useForm } from 'react-hook-form';

import { Section } from '@/components/star-forge/section';
import CustomSelect from '@/components/star-forge/select-1';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  store: z.string().min(1, { message: 'Por favor, selecione uma loja' })
});

type FormData = z.infer<typeof formSchema>;

const WelcomeSection = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      store: ''
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <Section.Root className="relative px-6 py-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <CustomSelect formName="store" label="Selecionar Usuário" />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Enviar
          </Button>
        </form>
      </Form>
    </Section.Root>
  );
};

export default WelcomeSection;
