import Image from 'next/image';
import Link from 'next/link';
import ButtonTheme from '../components/organisms/Navbar/ButtonTheme';

export default function PageNotFound() {
  return (
    <div className="not-found">
      <div className="text-center">
        <Image src="/image/404-not-found.svg" width={500} height={250} alt="404 Not Found" />
        <h1 className="my-3">Page Not Foundx</h1>
        <Link href="/">
          <span className="btn btn-outline-purple">
            Homepage
          </span>
        </Link>
      </div>
      <div className="d-none">
        <ButtonTheme />
      </div>
    </div>
  );
}
