'use strict';

const Sequelize = require('sequelize');
const AgencyModel = require('./models/agency.js');
const UserModel = require('./models/user.js');
const PasswordResetModel = require('./models/password-reset.js');
const TerminalModel = require('./models/terminal.js');
const RouteModel = require('./models/route.js');
const BusModel = require('./models/bus.js');
const TicketModel = require('./models/ticket.js');
const ScheduleModel = require('./models/schedule.js');
const ParcelModel = require('./models/parcel.js');
const UserTerminalModel = require('./models/user-terminal.js');
const EventModel = require('./models/event.js');
const VerifierModel = require('./models/verifier.js');
const PickupPointModel = require('./models/pickup-point.js');
const EventUserModel = require('./models/event-user.js');


const DB = new Sequelize({
  dialect: 'sqlite',
  storage: './src/backend/database.sqlite',
  define: {
    underscoredAll: true
  },
  logging: false
});

const Agency = AgencyModel(DB, Sequelize);
const User = UserModel(DB, Sequelize);
const PasswordReset = PasswordResetModel(DB, Sequelize);
const Terminal = TerminalModel(DB, Sequelize);
const Route = RouteModel(DB, Sequelize);
const Bus = BusModel(DB, Sequelize);
const Ticket = TicketModel(DB, Sequelize);
const Schedule = ScheduleModel(DB, Sequelize);
const Parcel = ParcelModel(DB, Sequelize);
const UserTerminal = UserTerminalModel(DB, Sequelize);
const Event = EventModel(DB, Sequelize);
const Verifier = VerifierModel(DB, Sequelize);
const PickupPoint = PickupPointModel(DB, Sequelize);
const EventUser = EventUserModel(DB, Sequelize);

Agency.hasMany(User, {
  foreignKey: 'agency_id',
  as: 'users'
});

Agency.hasMany(Terminal, {
  foreignKey: 'agency_id',
  as: 'terminals'
});

Agency.hasMany(Route, {
  foreignKey: 'agency_id',
  as: 'routes'
});

Agency.hasMany(Bus, {
  foreignKey: 'agency_id',
  as: 'buses'
});

User.belongsTo(Agency, {
  foreignKey: 'agency_id',
  as: 'agency'
});

User.belongsTo(UserTerminal, {
  foreignKey: 'terminal_id',
  as: 'terminal'
});

User.hasMany(Ticket, {
  foreignKey: 'user_id',
  as: 'tickets'
});

User.hasMany(Schedule, {
  foreignKey: 'user_id',
  as: 'schedules'
});

User.hasMany(Parcel, {
  foreignKey: 'user_id',
  as: 'parcels'
});

Terminal.hasMany(UserTerminal, {
  foreignKey: 'user_id',
  as: 'users'
});

Terminal.belongsTo(Agency, {
  foreignKey: 'agency_id',
  as: 'agency'
});

Route.belongsTo(Agency, {
  foreignKey: 'agency_id',
  as: 'agency'
});

Bus.belongsTo(Agency, {
  foreignKey: 'agency_id',
  as: 'agency'
});

Ticket.belongsTo(Terminal, {
  foreignKey: 'terminal_id',
  as: 'terminal'
});

Schedule.belongsTo(Terminal, {
  foreignKey: 'terminal_id',
  as: 'terminal'
});

Schedule.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'driver'
});

Parcel.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'attendant'
});

Parcel.belongsTo(Schedule, {
  foreignKey: 'schedule_id',
  as: 'schedule'
});

UserTerminal.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user'
});

UserTerminal.belongsTo(Terminal, {
  foreignKey: 'terminal_id',
  as: 'terminal'
});

Event.hasMany(EventUser, {
  foreignKey: 'event_id',
  as: 'users'
});

Event.hasMany(Verifier, {
  foreignKey: 'event_id',
  as: 'verifiers'
});

Event.hasMany(PickupPoint, {
  foreignKey: 'event_id',
  as: 'pickups'
});

Verifier.belongsTo(Event, {
  foreignKey: 'event_id',
  as: 'event'
});

Verifier.hasMany(EventUser, {
  foreignKey: 'verifier_id',
  as: 'verifiedUsers'
});

PickupPoint.belongsTo(Event, {
  foreignKey: 'event_id',
  as: 'event'
});

EventUser.belongsTo(Event, {
  foreignKey: 'event_id',
  as: 'event'
});

EventUser.belongsTo(Verifier, {
  foreignKey: 'verifier_id',
  as: 'verifiedBy'
});

EventUser.belongsTo(PickupPoint, {
  foreignKey: 'pickup_point_id',
  as: 'pickup'
});

module.exports = {
  DB,
  DB,
  Agency,
  User,
  PasswordReset,
  Terminal,
  Route,
  Bus,
  Ticket,
  Schedule,
  Parcel,
  UserTerminal,
  Event,
  Verifier,
  PickupPoint,
  EventUser
}