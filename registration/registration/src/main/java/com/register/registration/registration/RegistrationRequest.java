package com.register.registration.registration;

import lombok.EqualsAndHashCode;

@EqualsAndHashCode
public class RegistrationRequest {

    private final String lastName;
    private final String password;
    private final String email;
    private final String firstName;

    public RegistrationRequest(String firstName, String lastName, String password, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public String getFirstName() {
        return firstName;
    }

    @Override
    public String toString() {
        return "RegistrationRequest [email=" + email + ", firstName=" + firstName + ", lastName=" + lastName
                + ", password=" + password + "]";
    }

}
