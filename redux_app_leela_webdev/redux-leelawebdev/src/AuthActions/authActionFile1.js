import { AuthenticationService } from "../AuthService/authServiceFile1";


export const actionConfirmed = "Promise delivered successfully , request has been fetched from API";
export const actionFailed = "Promise failed , request failed"



export function signUpAction(email,password)
{
      return function(dispatch)
        {
                AuthenticationService(email,password).then(function(response_promise)
                {
                        dispatch();
                        console.log(response_promise);
                })
        }
}

export function ConfirmedSignUp(payload)
{
        return {
            typeof : actionConfirmed,
            payload,
        }
}



