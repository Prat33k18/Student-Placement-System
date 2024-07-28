package com.tns.B83_placement;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class placementController {
	@Autowired
	 private placementService service;

	 // RESTful API methods for Retrieval operations
	 @CrossOrigin(origins = "http://localhost:3000",allowedHeaders="*")
	 @GetMapping("/placement")
	 public List<placementEntity> list()
	 {
	 return service.listAll(); 
	 }

	 @GetMapping("/placement/{id}")
	 public ResponseEntity<placementEntity> get(@PathVariable Integer id)
	 {
	 try
	 {
	 placementEntity r = service.get(id);
	 return new ResponseEntity<placementEntity>(r, HttpStatus.OK);
	 }
	 catch (NoSuchElementException e)
	 {
	 return new ResponseEntity<placementEntity>(HttpStatus.NOT_FOUND);
	 }
	}
	 // RESTful API method for Create operation
	 @PostMapping("/placement")
	 public void add(@RequestBody placementEntity place)
	 {
	 service.save(place);
	 }

	 // RESTful API method for Update operation
	 @PutMapping("/placement/{id}")
	 public ResponseEntity<?> update(@RequestBody placementEntity place, @PathVariable Integer id)
	 {
	 try
	 {
	 placementEntity existProduct = service.get(id);
	 service.save(place);
	 return new ResponseEntity<>(HttpStatus.OK);
	 }
	 catch (NoSuchElementException e)
	 {
	 return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	 }
	 } 
	// RESTful API method for Delete operation
	 @DeleteMapping("/placement/{id}")
	 public void delete(@PathVariable Integer id)
	 {
	 service.delete(id);
	 } 
}