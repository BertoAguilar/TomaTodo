package com.alberto.TomaTodo.Controller;




import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TomaTodoController {
	
	
	@GetMapping("/")
	public String redirectHome() {
		return "redirect:/TomaTodo";
	}
	
	@GetMapping("/TomaTodo")
	public String homepage() {
		return "index.jsp";
	}

}
