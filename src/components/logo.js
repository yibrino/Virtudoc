/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
// import logo from 'assets/images/logo1.png';

export default function Logo({ white }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src="https://lirp.cdn-website.com/3a2c1857/dms3rep/multi/opt/High_def_logo_sm-153w.png" alt="Virtudoc logo" />
    </Link>
  );
}
