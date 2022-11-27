export type FontSizeProps =
  | 'text_xss'
  | 'text_xs'
  | 'text_sm'
  | 'text_base'
  | 'text_md'
  | 'text_lg'
  | 'title_xxs'
  | 'title_xs'
  | 'title_sm'
  | 'title_base'
  | 'title_md'
  | 'title_lg'
  | 'title_xl'
  | 'title_xxl'

export type ColorProps =
  | 'header'
  | 'background_primary'
  | 'background_secondary'
  | 'text'
  | 'text_detail'
  | 'title'
  | 'line'
  | 'line_darker'
  | 'main'
  | 'secondary'
  | 'success'
  | 'shape'
  | 'shape_dark'
  | 'danger'
  | 'danger_light'
  | 'warning'
  | 'warning_light'
  | 'gradient'

export type WeightProps = 'bold' | 'medium' | 'regular' | 'light'

export type CommonCSSProperty = {
  mt?: string | number
  mb?: string | number
  ml?: string | number
  mr?: string | number
  mx?: string | number
  my?: string | number
  m?: string | number
  pt?: string | number
  pb?: string | number
  pl?: string | number
  pr?: string | number
  px?: string | number
  py?: string | number
  p?: string | number

  color?: ColorProps
  fontSize?: FontSizeProps
  weight?: WeightProps
  align?: 'left' | 'center' | 'right'
  lineHeight?: string | number

  display?: 'flex' | 'block' | 'inline' | 'grid' | 'none'
  justify?: 'center' | 'end' | 'start' | 'space-between'
  alignI?: 'center' | 'end' | 'start'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'

  w?: string | number
  h?: string | number
}

const theme = {
  colors: {
    header: '#1B1B1F',
    background_primary: '#0B0C0D',
    background_secondary: '#151519',
    text: '#7A7A80',
    text_detail: '#AEAEB3',
    title: '#FFFFFF',
    line: '#2C2C2C',
    line_darker: '#222222',
    main: '#13B1E3',
    secondary: '#4D5EFF',
    success: '#2DC573',
    shape: '#E1E1E8',
    shape_dark: '#29292E',
    danger: '#DC393A',
    danger_light: '#FCD2D2',
    warning: '#FFA526',
    warning_light: '#FEEBCB',
    gradient: 'linear-gradient(45deg, #13B1E3, #4D5EFF)',
  },
  fonts: {
    size: {
      text_xss: '10px',
      text_xs: '12px',
      text_sm: '14px',
      text_base: '16px',
      text_md: '18px',
      text_lg: '20px',
      title_xxs: '26px',
      title_xs: '28px',
      title_sm: '30px',
      title_base: '32px',
      title_md: '34px',
      title_lg: '36px',
      title_xl: '38px',
      title_xxl: '42px',
    },
    weight: {
      bold: '700',
      medium: '500',
      regular: '400',
      light: '300',
    },
  },
  breakpoints: {
    xxs: '(max-width: 480px)',
    xs: '(max-width: 560px)',
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1280px)',
    min_xxs: '(min-width: 480px)',
    min_xs: '(min-width: 560px)',
    min_sm: '(min-width: 640px)',
    min_md: '(min-width: 768px)',
    min_lg: '(min-width: 1024px)',
    min_xl: '(min-width: 1280px)',
  },
}

export { theme }
