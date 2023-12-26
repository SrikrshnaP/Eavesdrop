// Run this in the beginning ONLY IF you are just setting up your db with some data
const mongoose = require('mongoose')
require('dotenv').config()
const Task = require('./models/Task')

console.log(Task)

const tasks = [
    {
        "projectName": "SFC Configurator",
        "creatorEmail": "ishaanshettigar@gmail.com",
        "taskName": "Create another sheet that has cost summaries for all components/connectors",
        "taskDescription": "In the last call the stakeholders stressed on the importance of having another sheet where the costs are displayed. ",
        "taskPriority": "High",
        "taskID": "1",
        "taskTags": "csv,cost,excel",
        "taskType": "Improvement",
        "taskAssignees": "1,2,3",
        "taskDepartments": "Backend, Design",
        "taskDeadline": new Date('December 12, 2023'),
        "taskStartTime": new Date('December 10, 2023'),
        "taskApproved": "yes",
        "taskCompleted": "yes",
        "taskReviewed": "yes",
        "taskBacklog": "no",
    },
    {
        "projectName": "Eavesdrop",
        "creatorEmail": "ishaanshettigar@gmail.com",
        "taskName": "[BUG] Sidebar tooltip is being displayed below (Z) tasks",
        "taskDescription": "Tooltip in the sidebar is being displayed in the lower z-index. Correcting the z-index also doesn't fix this. Please look into this issue",
        "taskPriority": "Medium",
        "taskID": "2",
        "taskTags": "CSS,TailwindCSS",
        "taskType": "Bug-Fix",
        "taskAssignees": "4,2",
        "taskDepartments": "FrontEnd,",
        "taskDeadline": new Date(),
        "taskStartTime": null,
        "taskApproved": "no",
        "taskCompleted": "no",
        "taskReviewed": "no",
        "taskBacklog": "no",
    },
    {
        "projectName": "SFC Configurator",
        "creatorEmail": "ishaanshettigar@gmail.com",
        "taskName": "Fix the hover modal position when modal is out of bounds for PLET and UTH",
        "taskDescription": "The hover modal is wildly out of position due to the fact that we are defining the distance of the modal from the hovered coordinates in terms of the elements height (in case of out of bounds on the Y axis) and width (in case of out of bounds on the X axis). This is an error simply due to the fact that these elements PLET and UTH have a much larger size. Not visually tho,\
        the elements bounding box is itself larger than the others.\nPossible solutions:\nRedefine/Re-draw them.\nFigure out a different way to display the out of bounds cases.",
        "taskPriority": "Low",
        "taskID": "3",
        "taskTags": "HTML,CSS",
        "taskType": "Bug-Fix",
        "taskAssignees": "5,",
        "taskDepartments": "FrontEnd,",
        "taskDeadline": new Date('December 22, 2023'),
        "taskStartTime": new Date('December 15, 2023'),
        "taskApproved": "yes",
        "taskCompleted": "yes",
        "taskReviewed": "no",
        "taskBacklog": "no",
    },
    {
        "projectName": "SFC Configurator",
        "creatorEmail": "ishaanshettigar@gmail.com",
        "taskName": "When refreshing the page or opening a diagram that you just saved, the linsk dont show up cause of some error",
        "taskDescription": "When refreshing the page or saving and loading a diagram, the link color disappears. This is cause something weird happens when it saves it, I do not know what. Look at localstorage under the links attrs. Something weird is happeniing",
        "taskPriority": "Low",
        "taskID": "4",
        "taskTags": "Javascript,",
        "taskType": "Bug-Fix",
        "taskAssignees": "3",
        "taskDepartments": "FrontEnd,",
        "taskDeadline": new Date('January 03, 2024'),
        "taskStartTime": new Date(),
        "taskApproved": "yes",
        "taskCompleted": "yes",
        "taskReviewed": "no",
        "taskBacklog": "no",
    },
    {
        "projectName": "SFC Configurator",
        "creatorEmail": "ishaanshettigar@gmail.com",
        "taskName": "New Feature: When the user drags an element out of bounds then translate the paper in that direction",
        "taskDescription": "This feature is needed to navigate complex diagrams.",
        "taskPriority": "Medium",
        "taskID": "5",
        "taskTags": "javascript,",
        "taskType": "New-Feature",
        "taskAssignees": "5,6",
        "taskDepartments": "FrontEnd,",
        "taskDeadline": new Date(),
        "taskStartTime": null,
        "taskApproved": "not-yet",
        "taskCompleted": "no",
        "taskReviewed": "no",
        "taskBacklog": "no",
    },
    {
        "projectName": "SFC Configurator",
        "creatorEmail": "ishaanshettigar@gmail.com",
        "taskName": "Use browser local storage to store the current sessions state ",
        "taskDescription": "This is a required feature as the user should not have the inconvenience of redrawing the diagrams if they accidentally close the tab.\nPossible ways to save the diagram: \n Ctrl + S triggers the saving\nSave every 5 minutes/1 minutes/30 seconds.\nSave once every graph.on('change', function)  event\nWe will be utilizing browser local storage",
        "taskPriority": "High",
        "taskID": "6",
        "taskTags": "javascript, browser",
        "taskType": "New-Feature",
        "taskAssignees": "7,",
        "taskDepartments": "FrontEnd,BackEnd",
        "taskDeadline": new Date(),
        "taskStartTime": null,
        "taskApproved": "not-yet",
        "taskCompleted": "no",
        "taskReviewed": "no",
        "taskBacklog": "no",
    },
    {
        "projectName": "SFC Configurator",
        "creatorEmail": "ishaanshettigar@gmail.com",
        "taskName": "Platform element doesnt scale properly. I messed up the calc expressions somewhere",
        "taskDescription": ".",
        "taskPriority": "Low",
        "taskID": "7",
        "taskTags": "javascript,css",
        "taskType": "Bug-Fix",
        "taskAssignees": "4,",
        "taskDepartments": "FrontEnd,",
        "taskDeadline": new Date(),
        "taskStartTime": null,
        "taskApproved": "not-yet",
        "taskCompleted": "no",
        "taskReviewed": "no",
        "taskBacklog": "no",
    },
    {
        "projectName": "Text to SQL Bot",
        "creatorEmail": "ishaanshettigar@gmail.com",
        "taskName": "Add a 'Supported Databases' section in the homepage ",
        "taskDescription": "",
        "taskPriority": "Low",
        "taskID": "8",
        "taskTags": "Python, HTML, CSS",
        "taskType": "New-Feature",
        "taskAssignees": "6,",
        "taskDepartments": "FrontEnd, Design",
        "taskDeadline": new Date(),
        "taskStartTime": null,
        "taskApproved": "not-yet",
        "taskCompleted": "no",
        "taskReviewed": "no",
        "taskBacklog": "no",
    },
    {
        "projectName": "SFC Configurator",
        "creatorEmail": "ishaanshettigar@gmail.com",
        "taskName": "Integrate the new parameters into the application.",
        "taskDescription": "Make sure to dynamically assign the necessary parameters every time the application is loaded up.",
        "taskPriority": "High",
        "taskID": "9",
        "taskTags": "javascript,frontend",
        "taskType": "New-Feature",
        "taskAssignees": "9,10",
        "taskDepartments": "FrontEnd,",
        "taskDeadline": new Date(),
        "taskStartTime": null,
        "taskApproved": "not-yet",
        "taskCompleted": "no",
        "taskReviewed": "no",
        "taskBacklog": "no",
    }
]

const populate = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected successfully to Database")
    await Task.deleteMany()
    console.log("Successfully deleted Database Contents")
    await Task.insertMany(tasks)
    console.log("Inserted into Collection Successfully")
}

populate()