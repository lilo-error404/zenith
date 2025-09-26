import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact01Page = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <b className="text-muted-foreground uppercase font-semibold text-sm">
        Contate-nos
      </b>
      <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
        Entre em contato
      </h2>
      <p className="mt-4 text-base sm:text-lg text-muted-foreground">
      Nós da Zenith estamos sempre aqui para conversar.
      </p>
      <div
        className="max-w-(--breakpoint-xl) mx-auto py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
        <div className="text-center flex flex-col items-center">
          <div
            className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Email</h3>
          <p className="mt-2 text-muted-foreground">
            Estamos aqui para ajudar
          </p>
          <Link
            className="mt-4 font-medium text-primary"
            href="mailto:zenith@email.com">
            zenith@email.com
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div
            className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
            <MapPinIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Agência</h3>
          <p className="mt-2 text-muted-foreground">
            Venha nos fazer uma visita
          </p>
          <Link
            className="mt-4 font-medium text-primary"
            href="https://www.google.com/maps/@32.62814,129.7380294,2a,89y,12.53h,76.68t/data=!3m8!1e1!3m5!1sMrdUtmuGxFIAAAQIt4-Z5Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D13.319999999999993%26panoid%3DMrdUtmuGxFIAAAQIt4-Z5Q%26yaw%3D12.53!7i13312!8i6656!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank">
            Rua das Ruínas <br /> MUR 2804 MIAU
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div
            className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Telefone</h3>
          <p className="mt-2 text-muted-foreground">Seg-Sex das 09:00 até às 18:00</p>
          <Link
            className="mt-4 font-medium text-primary"
            href="tel:zenith@email.com">
            +55 4002-8922
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Contact01Page;
