/** @jsx jsx */
import { jsx, Box, Flex, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
import { rgba } from 'polished';



export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Flex sx={styles.content}>
          <Flex sx={styles.copyright}>

            <Text as="span">
              ©2021 Virtudoc. All rights reserved.
            </Text>
          </Flex>


        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: '#020718',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: `1px solid ${rgba('#fff', 0.15)}`,
    display: ['block', null, null, null, 'flex'],
    justifyContent: 'space-between',
    paddingTop: '20px',
    paddingBottom: '60px',
    textAlign: ['center', null, null, null],
    '@media only screen and (max-width: 400px)': {
      pb: 50,
    },
  },
  copyright: {

    span: {
      fontSize: '14px',
      lineHeight: [1.8, null, null, 1.29],
      color: rgba('#FFFFFF', 0.7),
      marginTop: 1,

      marginLeft: 450,
      alignItems: 'center',
      display: 'flex',

    },
  },
  nav: {
    listStyle: 'none',
    alignItems: 'center',
    padding: 0,
    // display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, null, null],
    mt: [5, null, null, null, 0],
    li: {
      '+ li': {
        marginLeft: [4],
      },
      '@media only screen and (max-width: 400px)': {
        mb: 4,
      },
      a: {
        color: 'white',
        display: 'inline-flex',
        textAlign: 'right',
        textDecoration: 'none',
      },
    },
  },
};
