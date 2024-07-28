package com.tns.B83_placement;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
@Service
 
public class placementService {
		
	 @Autowired 
	 private placementRepository repo;

	 public List<placementEntity>listAll()
	 {
	 return repo.findAll();
	 }
	 

	 public void save(placementEntity product)
	 {
	 repo.save(product);
	 }

	 public placementEntity get(Integer id)
	 {
	 return repo.findById(id).get();
	 }

	 public void delete(Integer id)
	 {
	 repo.deleteById(id);
	 }
	}





