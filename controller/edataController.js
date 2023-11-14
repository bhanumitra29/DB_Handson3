const employee = require("../model/edataModel")
const data = require("../employeeData")


const dataEntry = async (req, res) => {
    const response = await employee.create(data);
    console.log(response);
    return res.send(response);
}

const getAllEmployees = async (req, res) => {
    const allemp = await employee.find();
    console.log(allemp);
    return res.send(allemp);
}

const getHighSalaryEmployees = async (req, res) => {
    const salemp = await employee.find({ "salary": { $gt: 30000 } });
    console.log(salemp);
    return res.send(salemp);
}

const getExperiencedEmployees = async (req, res) => {
    const expemp = await employee.find({ "overallExp": { $gt: 2 } });
    console.log(expemp);
    return res.send(expemp);
}

const getRecentGraduatesWithExperience = async (req, res) => {
    const grademp = await employee.find({ "yearGrad": { $gt: 2015 }, "overallExp": { $gt: 1 } });
    console.log(grademp);
    return res.send(grademp);
}

const updateHighSalaryEmployees = async (req, res) => {
    const salupdemp = await employee.updateMany({ "salary": { $gt: 70000 } }, { $set: { "salary": 65000 } });
    console.log(salupdemp);
    return res.send(salupdemp);
}

const deleteEmployeesFromCompanyY = async (req, res) => {
    const deleteyemp = await employee.deleteMany({ "lastCompany": "Y" });
    console.log(deleteyemp);
    return res.send(deleteyemp);
}

module.exports = { dataEntry, getAllEmployees,getHighSalaryEmployees,getExperiencedEmployees,getRecentGraduatesWithExperience,updateHighSalaryEmployees,deleteEmployeesFromCompanyY};