import './Loader.scss';

type LoaderProps = {
 backgroundColor: string
}

export default function Loader({ backgroundColor }: LoaderProps) {
 return <>
  <div id="loader" >

  </div>
  <div id="loader-after"></div>

 </>
}
