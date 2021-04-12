/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const count = {};
  let domain = [];
  for (let i = 0; i < domains.length; i++) {
    domain = domains[i].split('.').reverse();
    domain[0] = `.${domain[0]}`;
    for (let j = 0; j < domain.length; j++) {
      if (domain[j + 1]) {
        domain[j + 1] = `${domain[j]}.${domain[j + 1]}`;
      }
      if (!count[domain[j]]) {
        count[domain[j]] = 1;
      } else {
        count[domain[j]]++;
      }
    }
  }
  return count;
}

module.exports = getDNSStats;
