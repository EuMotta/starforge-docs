import Logo from '@/components/common/logo';
import { Button } from '@/components/star-forge-preview/button';
import { Text } from '@/components/star-forge/text';
import { siteConfig } from '@/settings';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineDocumentScanner } from 'react-icons/md';

export default function HomePage() {
  return (
    <main
      className="flex flex-1 flex-col items-center justify-center text-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://s21-kling.klingai.com/kimg/EMXN1y8qWAoGdXBsb2FkEg55bGFiLXN0dW50LXNncBo-a2xpbmcvd3MtN0lQd0I4YXJmWks4dGUzcG5rZy9ncmF5c2NhbGVfbWFqZXN0aWNfdGVjaF9zcGFjZS5wbmc.origin?x-kcdn-pid=112372)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="space-y-10 text-center">
        <Text.H1 className="text-8xl !font-bold">
          StarF
          <Logo size="xl" className="mt-auto mb-2" />
          rge
        </Text.H1>
        <Text.H2>Componentes reutilizáveis</Text.H2>
        <div className="mt-20 flex justify-evenly gap-5">
          <Link
            href="/docs"
            className="group hover:shadow2xl relative inline-block overflow-hidden px-4 py-2 text-lg font-bold tracking-wide text-white uppercase transition-all duration-500 hover:scale-105 hover:shadow-[#49BEB7]/40"
          >
            <span className="relative z-10 flex items-center gap-2">
              <MdOutlineDocumentScanner className="text-[#49BEB7]" />
              Docs
            </span>
            <span className="absolute bottom-0 left-0 h-[3px] w-full scale-x-0 transform bg-gradient-to-r from-[#49BEB7] to-[#409690] transition-transform duration-500 group-hover:scale-x-100"></span>
            <span className="absolute inset-0 translate-x-[-100%] -skew-x-12 transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"></span>
          </Link>
          <Link
            href={siteConfig.site.links.github}
            className="group hover:shadow2xl relative inline-block overflow-hidden px-4 py-2 text-lg font-bold tracking-wide text-white uppercase transition-all duration-500 hover:scale-105 hover:shadow-[#49BEB7]/40"
          >
            <span className="relative z-10 flex items-center gap-2">
              <BsGithub className="text-[#49BEB7]" />
              GitHub
            </span>
            <span className="absolute bottom-0 left-0 h-[3px] w-full scale-x-0 transform bg-gradient-to-r from-[#49BEB7] to-[#409690] transition-transform duration-500 group-hover:scale-x-100"></span>
            <span className="absolute inset-0 translate-x-[-100%] -skew-x-12 transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"></span>
          </Link>
        </div>
      </div>
    </main>
  );
}
