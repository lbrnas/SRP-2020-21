  
  exports.login = {
    title: "Sign in user",
    type: "object",
    properties: {
      username: { type: "string", minLength: 1 },
      password: { type: "string", minLength: 8 },
    },
    required: ["username", "password"],
  };
  

  