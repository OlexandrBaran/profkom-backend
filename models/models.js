const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const TeamMember = sequelize.define( 'team_member', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    firstNameUA:{type:DataTypes.STRING, allowNull:false},
    lastNameUA:{type:DataTypes.STRING, allowNull:false},
    firstNameEN:{type:DataTypes.STRING, allowNull:false},
    lastNameEN:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, unique:true, allowNull:false},
    phoneNumber:{type:DataTypes.STRING, unique:true, allowNull:false},
    descriptionEN:{type:DataTypes.STRING, unique:true, allowNull:false},
    descriptionUA:{type:DataTypes.STRING, unique:true, allowNull:false},
    department:{type:DataTypes.STRING, allowNull:false},
    image:{type:DataTypes.STRING, allowNull:false},
    positionUA:{type:DataTypes.STRING, allowNull:false},
    positionEN:{type:DataTypes.STRING, allowNull:false},
    instagram:{type:DataTypes.STRING, allowNull:false},
    facebook:{type:DataTypes.STRING, allowNull:false},
    telegram:{type:DataTypes.STRING, allowNull:false}
})

const User = sequelize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    firstName:{type:DataTypes.STRING, allowNull:false},
    lastName:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, unique:true, allowNull:false},
    password:{type:DataTypes.STRING, allowNull:false},
    role:{type:DataTypes.STRING, defaultValue:"USER"},
    department:{type:DataTypes.STRING, allowNull:false},
    isActivated:{type:DataTypes.BOOLEAN, allowNull:false, defaultValue:false},
    actvationLink:{type:DataTypes.STRING}
})

const News = sequelize.define( 'news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    titleEN:{type:DataTypes.STRING, allowNull:false},
    titleUA:{type:DataTypes.STRING, allowNull:false},
    image:{type:DataTypes.STRING, allowNull:false},
    descriptionEN:{type:DataTypes.STRING, allowNull:false},
    descriptionUA:{type:DataTypes.STRING, allowNull:false},
    department:{type:DataTypes.STRING, allowNull:false},
    date:{type:DataTypes.DATE, allowNull:false},
    views:{type:DataTypes.INTEGER, allowNull:false},
    likes:{type:DataTypes.INTEGER, allowNull:false},
    author:{type:DataTypes.STRING, allowNull:false}
})

const Chummery = sequelize.define( 'chummery', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    nameUA:{type:DataTypes.STRING, allowNull:false},
    nameEN:{type:DataTypes.STRING, allowNull:false},
    addressUA:{type:DataTypes.STRING, allowNull:false},
    addressEN:{type:DataTypes.STRING, allowNull:false},
    phone:{type:DataTypes.STRING, unique:true, allowNull:false},
    comendantPhone:{type:DataTypes.STRING, unique:true, allowNull:false},
    image:{type:DataTypes.STRING, allowNull:false},
    additionalInfoUA:{type:DataTypes.STRING, allowNull:false},
    additionalInfoEN:{type:DataTypes.STRING, allowNull:false}
})

const Announcement = sequelize.define( 'announcement', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    titleEN:{type:DataTypes.STRING, allowNull:false},
    titleUA:{type:DataTypes.STRING, allowNull:false},
    descriptionEN:{type:DataTypes.STRING, allowNull:false},
    descriptionUA:{type:DataTypes.STRING, allowNull:false},
    department:{type:DataTypes.STRING, allowNull:false},
    image:{type:DataTypes.STRING, allowNull:false},
    date:{type:DataTypes.DATE, allowNull:false},
    views:{type:DataTypes.INTEGER, allowNull:false},
    likes:{type:DataTypes.INTEGER, allowNull:false},
    author:{type:DataTypes.STRING, allowNull:false}
})

const AdditionalPointsRequest = sequelize.define( 'additional_points_request', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    name:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false},
    department:{type:DataTypes.STRING, allowNull:false},
    course:{type:DataTypes.STRING, allowNull:false},
    category:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.STRING, allowNull:false},
    file:{type:DataTypes.STRING, allowNull:false}    
})

const Rating = sequelize.define( 'rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    department:{type:DataTypes.STRING, allowNull:false},
    title:{type:DataTypes.STRING, allowNull:false},
    file:{type:DataTypes.STRING, allowNull:false}
})

const TrustBoxRequest = sequelize.define( 'trust_box_request', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    department:{type:DataTypes.STRING, allowNull:false},
    theme:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.STRING, allowNull:false}
})

const AdditionalPointsResult = sequelize.define( 'additional_points_result', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    department:{type:DataTypes.STRING, allowNull:false},
    title:{type:DataTypes.STRING, allowNull:false},
    file:{type:DataTypes.STRING, allowNull:false}
})

const HaveIdeaRequest = sequelize.define( 'have_idea_request', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    name:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false},
    department:{type:DataTypes.STRING, allowNull:false},
    theme:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.STRING, allowNull:false}
})

const QuestionAnswer = sequelize.define( 'question_answer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    titleEN:{type:DataTypes.STRING, allowNull:false},
    titleUA:{type:DataTypes.STRING, allowNull:false},
    department:{type:DataTypes.STRING, allowNull:false},
    descriptionEN:{type:DataTypes.STRING, allowNull:false},
    descriptionUA:{type:DataTypes.STRING, allowNull:false} ,
    category:{type:DataTypes.STRING, allowNull:false}
})

const Poll = sequelize.define( 'poll', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    questionUA:{type:DataTypes.STRING, allowNull:false},
    questionEN:{type:DataTypes.STRING, allowNull:false},
    department:{type:DataTypes.STRING, allowNull:false},
    descriptionEN:{type:DataTypes.STRING, allowNull:false},
    descriptionUA:{type:DataTypes.STRING, allowNull:false} ,
    status:{type:DataTypes.STRING, defaultValue:"ACTIVE"},
    options:{type:DataTypes.ARRAY(DataTypes.STRING), allowNull:false},
    votes:{type:DataTypes.ARRAY(DataTypes.INTEGER), allowNull:false},
    votedUsersId:{type:DataTypes.ARRAY(DataTypes.INTEGER), allowNull:false}
})

module.exports = {
    TeamMember,
    User,
    News,
    Chummery,
    Announcement,
    AdditionalPointsRequest,
    Rating,
    TrustBoxRequest,
    AdditionalPointsResult,
    HaveIdeaRequest,
    QuestionAnswer,
    Poll
};