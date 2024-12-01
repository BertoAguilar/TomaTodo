package com.alberto.TomaTodo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class TomaTodoController {
	
	
	@GetMapping("/")
	public String redirectHome() {
		return "redirect:/homepage";
	}
	
	@GetMapping("/homepage")
	public String homepage() {
		return "homepage.jsp";
	}

}
