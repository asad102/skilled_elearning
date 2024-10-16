/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
  ],
  theme: {
    fontFamily : {
      PlusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
    },
    colors : {
      Blue : {
        600 : '#666CA3',
        900 : '#13183F',
      },
      Pink : {
        300 : '#FFA7C3',
        600 : '#F74780',
      },
      Grey : '#83869A',
      White : '#FFFFFF'
    },

    fontSize : {
      'preset-1' : ['56px', {
        lineHeight : '120%',
        letterSpacing : '0px',
        fontWeight : '800'
      }],
      'preset-2' : ['40px', {
        lineHeight : '120%',
        letterSpacing : '0px',
        fontWeight : '800'
      }],
      'preset-3' : ['32px', {
        lineHeight : '120%',
        letterSpacing : '0px',
        fontWeight : '800'
      }],
      'preset-4' : ['24px', {
        lineHeight : '120%',
        letterSpacing : '0px',
        fontWeight : '800'
      }],
      'preset-5' : ['18px', {
        lineHeight : '150%',
        letterSpacing : '0px',
        fontWeight : '500'
      }],
      'preset-6' : ['16px', {
        lineHeight : '150%',
        letterSpacing : '0px',
        fontWeight : '700'
      }],
      'preset-7' : ['18px', {
        lineHeight : '150%',
        letterSpacing : '0px',
        fontWeight : '700'
      }],
    },
    extend: {
      spacing : {
        100 : '8px',
        112 : '112px',
        59 : '59px',
        168 : '168px',
        320 : '320px',
        29 : '29px',
        150 : '12px',
        200 : '16px',
        250 : '20px',
        300 : '24px',
        335 : '335px',
        400 : '32px',
        500 : '40px',
        550 : '44px',
        600 : '48px',
        680 : '680px',
        700 : '56px',
        800 : '64px',
        1000 : '80px',
        1120 : '1120px',
        1600 : '128px',
        1800 : '144px',
        2000 : '680px',
        3000 : '1440px',
        322 : '322px',
        350 : '350px',
        352 : '352px',
        457 : '457px',
      },
      backgroundImage : {
        gradientpink : 'linear-gradient(to right,#F02AA6,#FF6F48)',
        gradientpurple : 'linear-gradient(to right,#4851FF,#F02AA6)',
        tt: 'linear-gradient(#FFFFFF 16%, #F0F1FF 50%, #FFFFFF 100%)',
        ta: 'linear-gradient(to bottom, #FF6F48 0%, #F02AA6 100%)',
        tb: 'linear-gradient(to bottom, #4851FF 0%, #F02AA6 100%)',
      },
      borderRadius : {
        15 : '15px',
      },
      dropShadow: {
        tt : '0px 25px 50px 0px rgba(6, 22, 141, 4.42)',
      },
    },
  },
  plugins: [],
}

