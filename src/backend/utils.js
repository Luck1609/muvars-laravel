export default class Utils {

  constructor(request) {
    this.method = request.method.toLowerCase();
    this.payload = request.payload ?? {};
    this.id = request.id ?? null

    if (this.method === 'get' && !this.id) return this.get();
    else if (this.method === 'get' && this.id) return this.show();
    else if (this.method === 'post' && !this.id) return this.post();
    else if (this.method === 'patch') return this.patch();
    else if (this.method === 'delete' && this.id) return this.delete();
    else return this.outside_resource()
  }

  UNAUTHENTICATED = "Unauthenticated user";
  INVALID_CREDENTIALS = "Incorrect Email or Password";
  NOT_FOUND = "does not exist in our records";
  LOGIN_SUCCESS = "Staff login successful";
  CREATED = "created successfully";
  UPDATED = "updated successfully";
  UPDATE_FAILED = "update failed,";
  EXIST = "already exist";
  FAILED = "couldn't be created, Please try again later";
  DATA_FAILED = "An error occured, data couldn't be fetched. Please try again";
  ILLEGAL_CHAR = "Invalid parmeter set";

  success = ({ data, message, code }) => {
    return {
      data,
      message: message ?? "",
      code: code ?? 200,
    };
  };

  error = ({ data, message, code }) => {
    return {
      data,
      message: message ?? "",
      code: code ?? 422,
    };
  };

  async get () {
    try {
      return await this.index();
    } catch({message}) {
      throw new Error(message)
    }
    
  }

  async post () {
    try {
      return await this.store();
    } catch({message}) {
      throw new Error(message)
    }
    
  }

  async show () {
    try {
      return await this.show();
    } catch({message}) {
      throw new Error(message)
    }
    
  }

  async patch() {
    try {
      if (!this.id) throw 'Missing required params (id)';
      else return await this.update();
    } catch({message}) {
      console.log('Utitlity error log', message)
      throw new Error(message)
    }
    
  }

  async delete () {
    try {
      return await this.delete();
    } catch({message}) {
      throw new Error(message)
    }
    
  }

  outside_resource () {
    try {
      return 'Request falls outside resource'
    } catch({message}) {
      throw new Error(message)
    }
    
  }
}
