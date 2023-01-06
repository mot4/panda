import { Properties as CSSProperties } from './csstype'
import { Tokens } from './token'

type BasePropTypes  = {
	aspectRatio: "square" | "landscape" | "portrait" | "wide" | "ultrawide" | "golden";
	top: Tokens["spacing"];
	left: Tokens["spacing"];
	insetInline: Tokens["spacing"];
	insetBlock: Tokens["spacing"];
	inset: Tokens["spacing"];
	insetBlockEnd: Tokens["spacing"];
	insetBlockStart: Tokens["spacing"];
	insetInlineEnd: Tokens["spacing"];
	insetInlineStart: Tokens["spacing"];
	start: Tokens["spacing"];
	right: Tokens["spacing"];
	end: Tokens["spacing"];
	bottom: Tokens["spacing"];
	insetX: Tokens["spacing"] | CSSProperties["insetInline"];
	insetY: Tokens["spacing"] | CSSProperties["insetBlock"];
	float: "left" | "right" | "start" | "end";
	flexBasis: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "full";
	flex: "1" | "auto" | "initial" | "none";
	gridTemplateColumns: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
	gridTemplateRows: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
	gridColumn: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "full";
	gridRow: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "full";
	gridAutoColumns: "min" | "max" | "fr";
	gridAutoRows: "min" | "max" | "fr";
	gap: Tokens["spacing"];
	gridGap: Tokens["spacing"];
	gridRowGap: Tokens["spacing"];
	gridColumnGap: Tokens["spacing"];
	rowGap: Tokens["spacing"];
	columnGap: Tokens["spacing"];
	padding: Tokens["spacing"];
	paddingLeft: Tokens["spacing"];
	paddingRight: Tokens["spacing"];
	paddingTop: Tokens["spacing"];
	paddingBottom: Tokens["spacing"];
	paddingBlock: Tokens["spacing"];
	paddingBlockEnd: Tokens["spacing"];
	paddingBlockStart: Tokens["spacing"];
	paddingInline: Tokens["spacing"];
	paddingInlineEnd: Tokens["spacing"];
	paddingInlineStart: Tokens["spacing"];
	paddingX: Tokens["spacing"] | CSSProperties["paddingInline"];
	paddingY: Tokens["spacing"] | CSSProperties["paddingBlock"];
	marginLeft: Tokens["spacing"];
	marginRight: Tokens["spacing"];
	marginTop: Tokens["spacing"];
	marginBottom: Tokens["spacing"];
	margin: Tokens["spacing"];
	marginX: Tokens["spacing"] | CSSProperties["marginInline"];
	marginY: Tokens["spacing"] | CSSProperties["marginBlock"];
	marginBlock: Tokens["spacing"];
	marginBlockEnd: Tokens["spacing"];
	marginBlockStart: Tokens["spacing"];
	marginInline: Tokens["spacing"];
	marginInlineEnd: Tokens["spacing"];
	marginInlineStart: Tokens["spacing"];
	spaceX: Tokens["spacing"];
	spaceY: Tokens["spacing"];
	width: Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	height: Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	minHeight: Tokens["sizes"];
	maxHeight: Tokens["sizes"];
	minWidth: Tokens["sizes"];
	maxWidth: Tokens["sizes"];
	color: Tokens["colors"];
	fontFamily: Tokens["fonts"];
	fontSize: Tokens["fontSizes"];
	fontWeight: Tokens["fontWeights"];
	fontSmoothing: "antialiased" | "subpixel-antialiased";
	letterSpacing: Tokens["letterSpacings"];
	lineHeight: Tokens["lineHeights"];
	textDecorationColor: Tokens["colors"];
	textEmphasisColor: Tokens["colors"];
	textIndent: Tokens["spacing"];
	textShadow: Tokens["shadows"];
	textOverflow: "ellipsis" | "clip" | "truncate";
	truncate: boolean;
	background: Tokens["colors"];
	backgroundColor: Tokens["colors"];
	backgroundGradient: Tokens["gradients"] | "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	textGradient: Tokens["gradients"] | "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	gradientFrom: Tokens["colors"];
	gradientTo: Tokens["colors"];
	gradientVia: Tokens["colors"];
	borderRadius: Tokens["radii"];
	borderTopLeftRadius: Tokens["radii"];
	borderTopRightRadius: Tokens["radii"];
	borderBottomRightRadius: Tokens["radii"];
	borderBottomLeftRadius: Tokens["radii"];
	borderTopRadius: Tokens["radii"];
	borderRightRadius: Tokens["radii"];
	borderBottomRadius: Tokens["radii"];
	borderLeftRadius: Tokens["radii"];
	borderStartStartRadius: Tokens["radii"];
	borderStartEndRadius: Tokens["radii"];
	borderStartRadius: Tokens["radii"];
	borderEndStartRadius: Tokens["radii"];
	borderEndEndRadius: Tokens["radii"];
	borderEndRadius: Tokens["radii"];
	border: Tokens["borders"];
	borderColor: Tokens["colors"];
	borderXColor: Tokens["colors"] | CSSProperties["borderColor"];
	borderYColor: Tokens["colors"] | CSSProperties["borderColor"];
	borderLeft: Tokens["borders"];
	borderLeftColor: Tokens["colors"];
	borderRight: Tokens["borders"];
	borderRightColor: Tokens["colors"];
	borderTop: Tokens["borders"];
	borderTopColor: Tokens["colors"];
	borderBottom: Tokens["borders"];
	borderBottomColor: Tokens["colors"];
	borderX: Tokens["borders"] | CSSProperties["border"];
	borderY: Tokens["borders"] | CSSProperties["border"];
	outlineColor: Tokens["colors"];
	divideX: string;
	divideY: string;
	divideColor: Tokens["colors"];
	divideStyle: CSSProperties["borderStyle"];
	boxShadow: Tokens["shadows"];
	boxShadowColor: Tokens["colors"];
	filter: "auto";
	dropShadow: Tokens["dropShadows"];
	blur: Tokens["blurs"];
	backdropFilter: "auto";
	backdropBlur: Tokens["blurs"];
	borderSpacing: Tokens["spacing"];
	borderSpacingX: Tokens["spacing"];
	borderSpacingY: Tokens["spacing"];
	transitionTimingFunction: Tokens["easings"];
	transitionDelay: Tokens["durations"];
	transitionDuration: Tokens["durations"];
	transitionProperty: "all" | "none" | "opacity" | "shadow" | "transform" | "base" | "background" | "colors";
	animation: Tokens["animations"];
	transform: "auto" | "auto-gpu";
	translateX: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full";
	translateY: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full";
	accentColor: Tokens["colors"];
	caretColor: Tokens["colors"];
	scrollMargin: Tokens["spacing"];
	scrollMarginX: Tokens["spacing"] | CSSProperties["scrollMarginInline"];
	scrollMarginY: Tokens["spacing"] | CSSProperties["scrollMarginBlock"];
	scrollMarginLeft: Tokens["spacing"];
	scrollMarginRight: Tokens["spacing"];
	scrollMarginTop: Tokens["spacing"];
	scrollMarginBottom: Tokens["spacing"];
	scrollMarginBlock: Tokens["spacing"];
	scrollMarginBlockEnd: Tokens["spacing"];
	scrollMarginBlockStart: Tokens["spacing"];
	scrollMarginInline: Tokens["spacing"];
	scrollMarginInlineEnd: Tokens["spacing"];
	scrollMarginInlineStart: Tokens["spacing"];
	scrollPadding: Tokens["spacing"];
	scrollPaddingBlock: Tokens["spacing"];
	scrollPaddingBlockStart: Tokens["spacing"];
	scrollPaddingBlockEnd: Tokens["spacing"];
	scrollPaddingInline: Tokens["spacing"];
	scrollPaddingInlineEnd: Tokens["spacing"];
	scrollPaddingInlineStart: Tokens["spacing"];
	scrollPaddingX: Tokens["spacing"] | CSSProperties["scrollPaddingInline"];
	scrollPaddingY: Tokens["spacing"] | CSSProperties["scrollPaddingBlock"];
	scrollPaddingLeft: Tokens["spacing"];
	scrollPaddingRight: Tokens["spacing"];
	scrollPaddingTop: Tokens["spacing"];
	scrollPaddingBottom: Tokens["spacing"];
	scrollSnapType: "none" | "x" | "y" | "both";
	scrollSnapStrictness: "mandatory" | "proximity";
	scrollSnapMargin: Tokens["spacing"];
	scrollSnapMarginTop: Tokens["spacing"];
	scrollSnapMarginBottom: Tokens["spacing"];
	scrollSnapMarginLeft: Tokens["spacing"];
	scrollSnapMarginRight: Tokens["spacing"];
	fill: Tokens["colors"];
	stroke: Tokens["colors"];
	srOnly: "true" | "false";
	debug: boolean;
	borderSlim: Tokens["colors"];
	colorPalette: "rose" | "pink" | "fuchsia" | "purple" | "indigo" | "blue" | "sky" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange" | "red" | "gray" | "slate";
	textStyle: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
}



  type CssProp<T> = T extends keyof CSSProperties ? CSSProperties[T] : never
  
  type BaseProp<T> = T extends keyof BasePropTypes ? BasePropTypes[T] : never
  
  type Shorthand<T> = CssProp<T> | BaseProp<T>
   
  export type PropTypes = BasePropTypes & {
  
	pos: Shorthand<"position">;
	flexDir: Shorthand<"flexDirection">;
	p: Shorthand<"padding">;
	pl: Shorthand<"paddingLeft">;
	pr: Shorthand<"paddingRight">;
	pt: Shorthand<"paddingTop">;
	pb: Shorthand<"paddingBottom">;
	pe: Shorthand<"paddingInlineEnd">;
	ps: Shorthand<"paddingInlineStart">;
	px: Shorthand<"paddingX">;
	py: Shorthand<"paddingY">;
	ml: Shorthand<"marginLeft">;
	mr: Shorthand<"marginRight">;
	mt: Shorthand<"marginTop">;
	mb: Shorthand<"marginBottom">;
	m: Shorthand<"margin">;
	mx: Shorthand<"marginX">;
	my: Shorthand<"marginY">;
	me: Shorthand<"marginInlineEnd">;
	ms: Shorthand<"marginInlineStart">;
	w: Shorthand<"width">;
	h: Shorthand<"height">;
	minH: Shorthand<"minHeight">;
	maxH: Shorthand<"maxHeight">;
	minW: Shorthand<"minWidth">;
	maxW: Shorthand<"maxWidth">;
	bgAttachment: Shorthand<"backgroundAttachment">;
	bgClip: Shorthand<"backgroundClip">;
	bg: Shorthand<"background">;
	bgColor: Shorthand<"backgroundColor">;
	bgPos: Shorthand<"backgroundPosition">;
	bgOrigin: Shorthand<"backgroundOrigin">;
	bgImage: Shorthand<"backgroundImage">;
	bgRepeat: Shorthand<"backgroundRepeat">;
	bgBlend: Shorthand<"backgroundBlendMode">;
	bgSize: Shorthand<"backgroundSize">;
	bgGradient: Shorthand<"backgroundGradient">;
	shadow: Shorthand<"boxShadow">;
	shadowColor: Shorthand<"boxShadowColor">;
	x: Shorthand<"translateX">;
	y: Shorthand<"translateY">;
}