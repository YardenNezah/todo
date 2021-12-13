  const LOCATION = {
    HOME: "Home",
    BANK: "Bank",
    WORK: "Work",
    GYM: "Gym",
    BARBER: "Barber",
    COLLEGE: "College",
    PARK: "Park",
    MALL: "Mall",
  };
  
  const URGENCY_LEVEL = {
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
  };
  
  const ASSIGNED = {
    YARDEN: "Yarden",
    RAHAV: "Rahav",
    MOM: "Mom",
    SHOVAL: "Shoval",
    RAZ: "Raz",
    NAAMA: "Naama",
  };
  
  module.exports = [
    {
        id: 0,
        isFeatured: true,
        isCompleted: false,
        taskTitle: "Clean Windows",
        taskDescription: "Clean kitchen's windows",
        taskLocation: LOCATION.HOME,
        maxTime: "02/10/2021",
        taskDuration: "2",
        urgencyLevel: URGENCY_LEVEL.HIGH,
        taskAssigned: [ASSIGNED.YARDEN, ASSIGNED.MOM],
    },
    {
        id: 1,
        isFeatured: true,
        isCompleted: false,
        taskTitle: "Cook",
        taskDescription: "Cook a breakfast with my friends",
        taskLocation: LOCATION.HOME,
        maxTime: "02/10/2021",
        taskDuration: "1",
        urgencyLevel: URGENCY_LEVEL.LOW,
        taskAssigned: [ASSIGNED.YARDEN, ASSIGNED.RAZ, ASSIGNED.NAAMA],
    },
    {
        id: 2,
        isFeatured: true,
        isCompleted: false,
        taskTitle: "Haircut",
        taskDescription: "I have to go to the hairdresser to do a haircut",
        taskLocation: LOCATION.BARBER,
        maxTime: "02/10/2021",
        taskDuration: "3",
        urgencyLevel: URGENCY_LEVEL.LOW,
        taskAssigned: [ASSIGNED.YARDEN],
    },
    {
        id: 3,
        isFeatured: true,
        isCompleted: false,
        taskTitle: "Gym",
        taskDescription: "I have to go to the gym to train my legs and arms",
        taskLocation: LOCATION.GYM,
        maxTime: "02/10/2021",
        taskDuration: "2",
        urgencyLevel: URGENCY_LEVEL.MEDIUM,
        taskAssigned: [ASSIGNED.YARDEN],
    },
    {
      id: 4,
      isFeatured: true,
      isCompleted: false,
      taskTitle: "Organize Clothes",
      taskDescription: "I Have to organize my clothes and to change from summer clothes to winter",
      taskLocation: LOCATION.HOME,
      maxTime: "02/10/2021",
      taskDuration: "4",
      urgencyLevel: URGENCY_LEVEL.HIGH,
      taskAssigned: [ASSIGNED.YARDEN],
  },
  {
    id: 5,
    isFeatured: true,
    isCompleted: false,
    taskTitle: "Read A Book",
    taskDescription: "Read my new action book",
    taskLocation: LOCATION.HOME,
    maxTime: "02/10/2021",
    taskDuration: "1",
    urgencyLevel: URGENCY_LEVEL.LOW,
    taskAssigned: [ASSIGNED.YARDEN],
},
{
  id: 6,
  isFeatured: true,
  isCompleted: false,
  taskTitle: "Run",
  taskDescription: "Run in the park with Shoval",
  taskLocation: LOCATION.PARK,
  maxTime: "02/10/2021",
  taskDuration: "2",
  urgencyLevel: URGENCY_LEVEL.MEDIUM,
  taskAssigned: [ASSIGNED.YARDEN, ASSIGNED.SHOVAL],
},
{
  id: 7,
  isFeatured: true,
  isCompleted: false,
  taskTitle: "Study",
  taskDescription: "I have to study a lot for my exam",
  taskLocation: LOCATION.COLLEGE,
  maxTime: "02/10/2021",
  taskDuration: "7",
  urgencyLevel: URGENCY_LEVEL.MEDIUM,
  taskAssigned: [ASSIGNED.YARDEN, ASSIGNED.RAZ],
},
{
  id: 8,
  isFeatured: true,
  isCompleted: false,
  taskTitle: "Withdraw Cash",
  taskDescription: "to withdraw cash from my bank or ATM",
  taskLocation: LOCATION.BANK,
  maxTime: "02/10/2021",
  taskDuration: "1",
  urgencyLevel: URGENCY_LEVEL.LOW,
  taskAssigned: [ASSIGNED.YARDEN],
},
{
  id: 9,
  isFeatured: true,
  isCompleted: false,
  taskTitle: "Wash Dishes",
  taskDescription: "wash the dishes every day",
  taskLocation: LOCATION.HOME,
  maxTime: "02/10/2021",
  taskDuration: "1",
  urgencyLevel: URGENCY_LEVEL.MEDIUM,
  taskAssigned: [ASSIGNED.YARDEN, ASSIGNED.RAHAV],
},
{
  id: 10,
  isFeatured: true,
  isCompleted: false,
  taskTitle: "Shop in Supermarket",
  taskDescription: "I need to buy groceries for the supermarket",
  taskLocation: LOCATION.MALL,
  maxTime: "02/10/2021",
  taskDuration: "1",
  urgencyLevel: URGENCY_LEVEL.MEDIUM,
  taskAssigned: [ASSIGNED.YARDEN, ASSIGNED.RAHAV],
},
  ];