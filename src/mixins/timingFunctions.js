/** @module Mixins */

<<<<<<< HEAD
=======
/**
 * String to represent commong easing functions as demonstrated here: (github.com/jaukia/easie).
 * @static
 * @return {string} CSS as JS.
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transition-timing-function': timingFunctions(easeInQuad)
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transition-timing-function: ${timingFunctions(easeInQuad)};
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition-timing-function': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
 * }
 */

>>>>>>> 6601612... chore(timingFunctions): Add cubic-bezier timing functions
const functionsMap = {
  'easeInBack':     'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  'easeInCirc':     'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
  'easeInCubic':    'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
  'easeInExpo':     'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
  'easeInQuad':     'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
  'easeInQuart':    'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
  'easeInQuint':    'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
  'easeInSine':     'cubic-bezier(0.470,  0.000, 0.745, 0.715)',

  'easeOutBack':    'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
  'easeOutCubic':   'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
  'easeOutCirc':    'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
  'easeOutExpo':    'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
  'easeOutQuad':    'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
  'easeOutQuart':   'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
  'easeOutQuint':   'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
  'easeOutSine':    'cubic-bezier(0.390,  0.575, 0.565, 1.000)',

  'easeInOutBack':  'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  'easeInOutCirc':  'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
  'easeInOutCubic': 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
  'easeInOutExpo':  'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
  'easeInOutQuad':  'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
  'easeInOutQuart': 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
  'easeInOutQuint': 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
  'easeInOutSine':  'cubic-bezier(0.445,  0.050, 0.550, 0.950)',
}

<<<<<<< HEAD
/**
 * String to represent commong easing functions as demonstrated here: (github.com/jaukia/easie).
 * @static
 * @param {('easeInBack'|'easeInCirc'|'easeInCubic'|'easeInExpo'|'easeInQuad'|'easeInQuart'|'easeInQuint'|'easeInSine'|'easeOutBack'|'easeOutCubic'|'easeOutCirc'|'easeOutExpo'|'easeOutQuad'|'easeOutQuart'|'easeOutQuint'|'easeOutSine'|'easeInOutBack'|'easeInOutCirc'|'easeInOutCubic'|'easeInOutExpo'|'easeInOutQuad'|'easeInOutQuart'|'easeInOutQuint'|'easeInOutSine')} [timingFunction] String representing desired cubic-bezier function.
 * @return {string} CSS as JS.
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transition-timing-function': timingFunctions('easeInQuad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transition-timing-function: ${timingFunctions('easeInQuad')};
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition-timing-function': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
 * }
 */

=======
>>>>>>> 6601612... chore(timingFunctions): Add cubic-bezier timing functions
function timingFunctions(timingFunction) {
  return functionsMap[timingFunction]
}

export default timingFunctions
