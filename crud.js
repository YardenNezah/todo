const { forEach } = require('./DummyData');
let entries = require('./DummyData');

module.exports.createListing = function (details) {
    if (!details)
        return {
            status: "404",
            message: "Details Requierd to create a Task",
        };
    const lastIndex = entries[entries.length - 1];
    const newEntrie = {
        id: lastIndex + 1,
        isFeatured: details.isFeatured,
        isCompleted: details.isCompleted,
        taskTitle: details.taskTitle,
        taskDescription: details.taskDescription,
        taskLocation: details.taskLocation,
        maxTime: details.maxTime,
        taskDuration: details.taskDuration,
        urgencyLevel: details.urgencyLevel,
        taskAssigned: details.taskAssigned,
    };

    entries.push(newEntrie);

    return { status: 200, message: "Task Created" };
};

module.exports.getListing = function (searchParams) {
    for (const item in entries) {
        const itemStr = item.toString();
        const listingsToReturn = [];
        const args = searchParams.split(" ");
        console.log(args);
        for (const arg of args) {
            if (item.includes(arg)) {
                // if ()
            }
        }
    }

    return { status: 200, message: "Task Found", data: entries };
};

module.exports.editListings = function (id, newDetails) {
    const entryID = entries.find((entry) => entry.id == id);
    if (!entryID) return { status: 404, message: "Task Not Found" };

    for (const property in newDetails) {
        entries[entryID][property] = newDetails[property];
    }
    return { status: 200, message: "Tasl Edited", data: entries[entryID] };
};

module.exports.deleteListing = function (id) {
    const delIndex = entries.find((entry) => entry.id == id);
    if (!delIndex) {
        return { status: 404, message: "Task Not Found" };
    }
    entries.splice(delIndex, 1);

    return { status: 200, message: "Task Deleted" };
};