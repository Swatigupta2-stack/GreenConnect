/**
 * Rule-based tree recommendation engine.
 * No AI/ML — every point is explainable.
 *
 * Scoring (max 100):
 *   Space:    good match   = +30, partial (>=70% of min) = +15
 *   Sunlight: exact match  = +25, compatible (adjacent level) = +15
 *   Water:    exact match  = +20, compatible (adjacent level) = +10
 *   Purpose:  match        = +25
 */

const LEVELS = ["low", "medium", "high"]

function levelDistance(a, b) {
  return Math.abs(LEVELS.indexOf(a) - LEVELS.indexOf(b))
}

function scoreSunlight(tree, userSunlight) {
  if (tree.sunlight.includes(userSunlight)) return 25
  const isAdjacent = tree.sunlight.some((lvl) => levelDistance(lvl, userSunlight) === 1)
  return isAdjacent ? 15 : 0
}

function scoreWater(tree, userWater) {
  if (tree.water.includes(userWater)) return 20
  const isAdjacent = tree.water.some((lvl) => levelDistance(lvl, userWater) === 1)
  return isAdjacent ? 10 : 0
}

function scoreSpace(tree, area) {
  if (area >= tree.minSpace) return 30
  if (area >= tree.minSpace * 0.7) return 15
  return 0
}

function scorePurpose(tree, userPurpose) {
  return tree.purposes.includes(userPurpose) ? 25 : 0
}

function scoreTree(tree, conditions) {
  const { area, sunlight, water, purpose } = conditions

  const spacePts = scoreSpace(tree, area)
  const sunlightPts = scoreSunlight(tree, sunlight)
  const waterPts = scoreWater(tree, water)
  const purposePts = scorePurpose(tree, purpose)

  const matchScore = spacePts + sunlightPts + waterPts + purposePts

  return { ...tree, matchScore }
}

/**
 * @param {Array} trees - full tree dataset
 * @param {Object} conditions - { area, sunlight, water, purpose }
 * @param {number} topN - how many results to return
 */
export function recommendTrees(trees, conditions, topN = 5) {
  const scored = trees.map((tree) => scoreTree(tree, conditions))
  const sorted = scored.sort((a, b) => b.matchScore - a.matchScore)

  const strong = sorted.filter((t) => t.matchScore >= 40)
  const results = strong.length >= 3 ? strong : sorted

  return results.slice(0, topN)
}
