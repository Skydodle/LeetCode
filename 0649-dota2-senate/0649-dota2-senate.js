/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let radiant = [], dire = [];

    // Initialize the queues with the indices of each senator
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }

    while (radiant.length && dire.length) {
        // Simulate the rounds
        let radiantIndex = radiant.shift();
        let direIndex = dire.shift();

        if (radiantIndex < direIndex) {
            // Radiant senator bans the Dire senator
            radiant.push(radiantIndex + senate.length); // Put this senator at the end of the queue   
        } else {
            // Dire senator bans the Radiant senator
            dire.push(direIndex + senate.length); // Put this senator at the end of the queue
        }
    }


    return radiant.length > 0 ? 'Radiant' : 'Dire';
};

