/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const uniqueEmails = new Set();

    for (const email of emails) {
        const [local, domain] = email.split('@');

        const cleanedLocal = local.split('+')[0].replace(/\./g, '');
        uniqueEmails.add(`${cleanedLocal}@${domain}`);
    }

    return uniqueEmails.size;
};
