interface Props {

  children: React.ReactNode;

  className?: string;

}


export default function Card({

  children,

  className = ""

}: Props) {


  return (

    <div

      className={`
      bg-white
      rounded-3xl
      shadow-lg
      border
      border-gray-200
      p-8
      ${className}
      `}

    >

      {children}

    </div>

  );

}