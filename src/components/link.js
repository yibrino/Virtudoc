/** @jsx jsx */
import { jsx, Link as A } from 'theme-ui';
import { Link as MenuLink } from 'react-scroll';

import NextLink from 'next/link';
export function NavLink({ path, label, children, ...rest }) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      {...rest}
    >
      <NextLink href={path}>
        <A sx={styles.slogan} >{label}</A>
      </NextLink>
    </MenuLink>
  );
}
// export function NavLink({ path, label, children, ...rest }) {
//   return (
//     <NextLink href={path}>
//       <MenuLink {...rest}>{children ? children : label}</MenuLink>
//     </NextLink>
//   );
// }
export function Link({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}
const styles = {
  slogan: {
    fontSize: 13,
    fontWeight: 200,
    lineHeight: 2.22,
    mb: ['12px'],
  },

};

