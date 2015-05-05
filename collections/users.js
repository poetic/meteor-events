Schemas.UserProfileSchema = new SimpleSchema({
  fullName: {
    type: String
  },
  //email: {
    //type: String,
    //regEx: SimpleSchema.RegEx.Email
  //},

  secondaryEmail: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional: true
  },
  phone: {
    type: String,
    optional: true
  },
  events: {
    type: [String],
    defaultValue: [],
  },
});

Meteor.users.attachSchema(new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: true
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    "emails.$.verified": {
        type: Boolean,
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true
    },
    profile: {
        type: Schemas.UserProfileSchema,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // // Add `roles` to your schema if you use the meteor-roles package.
    // // Option 1: Object type
    // // If you specify that type as Object, you must also specify the
    // // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // // Example:
    // // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // // You can't mix and match adding with and without a group since
    // // you will fail validation in some cases.
    // roles: {
    //     type: Object,
    //     optional: true,
    //     blackbox: true
    // },
    // // Option 2: [String] type
    // // If you are sure you will never need to use role groups, then
    // // you can specify [String] as the type
    // roles: {
    //     type: [String],
    //     optional: true
    // }
}));

