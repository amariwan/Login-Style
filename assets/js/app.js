function ViewModel ()
{
   var self = this;
   self.username = ko.observable('');
   self.password = ko.observable('');
   self.login = () =>
   {
      const username = self.username();
      const password = self.password();
      self.login = () =>
      {
         const checkUsername = self.isUserNameValidFunc(self.username());
         const checkPassword = self.isPasswordValidFunc(self.password());
         if (checkUsername !== true)
         {
            console.log(checkUsername, checkPassword);
            return;
         } else if (checkPassword !== true)
         {
            console.log(checkUsername, checkPassword);
            return;

         } else { console.log(self.username(), self.password()); }
      };

      // check input
      self.isUserNameValidFunc = (username) =>
      {
         let re = /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/;
         var resule;
         if (username != '')
         {
            if (re.test(username))
            {
               if (username.length >= 5)
               {
                  if (username.length <= 20)
                  {
                     resule = true;
                  } else
                  {
                     resule = 'Username is too long';
                     notif('warning', 'Loging Info', 'Username is too long', true);
                  }
               } else
               {
                  resule = 'username is not too long';
                  notif('warning', 'Loging Info', 'username is not too long', true);
               }
            } else
            {
               resule = 'Username is not valid';
               notif('warning', 'Loging Info', 'Username is not valid', true);
            }
         } else
         {
            resule = 'username is empty';
            notif('warning', 'Loging Info', 'username is empty', true);
         }
         return resule;
      };

      // isPasswordValid
      self.isPasswordValidFunc = (password) =>
      {
         var resule;
         if (password != '')
         {
            if (password.length >= 2)
            {
               if (password.length <= 50)
               {
                  resule = true;
               } else
               {
                  resule = 'Password is too long';
                  notif('warning', 'Loging Info', 'Password is too long', true);
               }
            } else
            {
               resule = 'Password is not too long';
               notif('warning', 'Loging Info', 'Password is not too long', true);
            }
         } else
         {
            resule = 'Password is empty';
            notif('warning', 'Loging Info', 'Password is empty', true);
         }
         return resule;
      };
   }
}

var checkJSON = function (Json)
{
   if (typeof Json == 'object')
   {
      try
      {
         Json = JSON.stringify(Json);
      } catch (err)
      {
         return false;
      }
   }

   if (typeof Json == 'string')
   {
      try
      {
         Json = JSON.parse(Json);
      } catch (err)
      {
         return false;
      }
   }

   if (typeof Json != 'object')
   {
      return false;
   }
   return true;
};
var vm = new ViewModel();
ko.applyBindings(vm);



const show_hide_password = (target) =>
{
   var input = document.getElementById('password-input');
   if (input.getAttribute('type') == 'password')
   {
      target.classList.add('view');
      input.setAttribute('type', 'text');
   } else
   {
      target.classList.remove('view');
      input.setAttribute('type', 'password');
   }
   return false;
};
