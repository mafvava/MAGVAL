interface Props {

  number: string;

  title: string;

}

export default function StepTitle({

  number,

  title

}: Props) {

  return (

    <div className="flex items-center gap-5">

      {/* Número */}

      <div
        className="
        w-14
        h-14
        rounded-full
        bg-blue-600
        text-white
        flex
        items-center
        justify-center
        text-xl
        font-bold
        shadow-md
        flex-shrink-0
        "
      >

        {number}

      </div>

      {/* Título */}

      <div>

        <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">

          Paso {number}

        </p>

        <h2 className="text-2xl font-bold text-gray-800">

          {title}

        </h2>

      </div>

    </div>

  );

}