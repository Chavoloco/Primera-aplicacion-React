
package com.register.registration.registration;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/registration")
@AllArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;

    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping
    public String register(@RequestBody RegistrationRequest request) {
        return registrationService.register(request);
    }

    // @GetMapping(path = "confirm/{token}")
    @RequestMapping(value = "/confirm", method = RequestMethod.GET)
    public String confirm(@RequestParam(name = "token") String token) {
        return registrationService.confirmToken(token);
    }

}