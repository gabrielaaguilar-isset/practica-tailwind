import Link from "next/link";

export const Banner = () => {
  return (
    <div className="py-3  text-center background-FirstElement">
      <div className="container">
        <p className="font-medium"><span className="hidden sm:inline">Página en contrucción. </span> <Link href="#" className="underline underline-offset-4 ">
        ¡Contáctame ahora! 
        </Link> </p>
       
      </div>
    </div>
  );
};
