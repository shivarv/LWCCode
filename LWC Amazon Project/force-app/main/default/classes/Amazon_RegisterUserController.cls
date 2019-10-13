public with sharing class Amazon_RegisterUserController {
    public Amazon_RegisterUserController() {
        
    }

    public static void registerUser(Contact con) {
        try {
            insert con;
        } catch(Exception e) {
            
        }
    }
}
