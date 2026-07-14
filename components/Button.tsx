interface Props {

  children: React.ReactNode;

  href?: string;

  onClick?: () => void;

  type?: "button" | "submit";

}


export default function Button({

  children,

  href,

  onClick,

  type = "button"

}: Props) {


  const styles = `
    inline-flex
    items-center
    justify-center
    px-8
    py-4
    rounded-2xl
    bg-blue-600
    text-white
    font-semibold
    transition
    hover:bg-blue-700
  `;


  if(href){

    return (

      <a

        href={href}

        className={styles}

      >

        {children}

      </a>

    );

  }


  return (

    <button

      type={type}

      onClick={onClick}

      className={styles}

    >

      {children}

    </button>

  );

}