import { CommonCSSProperty, theme } from '@styles/theme'

export const parseValueCSS = (value?: string | number) => {
  return typeof value === 'number' ? `${value}px` : value || 0
}

export const commonCSS = (
  props: CommonCSSProperty,
  defaultProps?: CommonCSSProperty
) => {
  return {
    style: {
      ...(props.w && {
        width: parseValueCSS(props.w),
      }),
      ...(props.h && {
        height: parseValueCSS(props.h),
      }),
      ...(props.color &&
        props.color !== 'gradient' && {
          color: theme.colors[props.color || 'title'],
        }),
      ...(props.color &&
        props.color === 'gradient' && {
          color: theme.colors[props.color || 'title'],
          background: theme.colors.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }),

      ...(props.fontSize && {
        fontSize: theme.fonts.size[props.fontSize || 'text_base'],
      }),

      ...(props.weight && {
        fontWeight: theme.fonts.weight[props.weight || 'regular'],
      }),

      textAlign: props.align || 'left',

      ...(props.lineHeight && {
        lineHeight: props.lineHeight,
      }),

      margin: props.m
        ? `${parseValueCSS(props.m)}`
        : props.mx
        ? `0 ${parseValueCSS(props.mx)}`
        : props.my
        ? `${parseValueCSS(props.my)} 0`
        : defaultProps?.m,

      ...(props.mt && {
        marginTop: parseValueCSS(props.mt),
      }),
      ...(props.mb && {
        marginBottom: parseValueCSS(props.mb) || null,
      }),
      ...(props.ml && {
        marginLeft: parseValueCSS(props.ml) || null,
      }),
      ...(props.mr && {
        marginRight: parseValueCSS(props.mr) || null,
      }),

      padding: props.p
        ? `${parseValueCSS(props.p)}`
        : props.px
        ? `0 ${parseValueCSS(props.px)}`
        : props.py
        ? `${parseValueCSS(props.py)} 0`
        : defaultProps?.p,

      ...(props.pt && {
        paddingTop: parseValueCSS(props.pt),
      }),
      ...(props.pb && {
        paddingBottom: parseValueCSS(props.pb),
      }),
      ...(props.pl && {
        paddingLeft: parseValueCSS(props.pl),
      }),
      ...(props.pr && {
        paddingRight: parseValueCSS(props.pr),
      }),

      ...(props.display && {
        display: props.display,
      }),
      ...(props.justify && {
        justifyContent: props.justify || 'center',
      }),
      ...(props.alignI && {
        alignItems: props.alignI || 'center',
      }),
      ...(props.direction && {
        flexDirection: props.direction || 'column',
      }),
    },
  }
}
