package com.seniorproject.redcarpet.controller;

//import org.hibernate.tool.schema.internal.exec.AbstractScriptTargetOutput;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.seniorproject.redcarpet.model.Review;
import com.seniorproject.redcarpet.model.ReviewRepository;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
class ReviewController {

	private final Logger log = LoggerFactory.getLogger(ReviewController.class);
	private ReviewRepository reviewRepository;

	public ReviewController(ReviewRepository reviewRepository) {
		this.reviewRepository = reviewRepository;
	}

	@GetMapping("/reviews")
	Collection<Review> reviews() {
		return reviewRepository.findAll();
	}

	@GetMapping("/review/{id}")
	ResponseEntity<?> getReview(@PathVariable Long id) {
		Optional<Review> review = reviewRepository.findById(id);
		return review.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@PostMapping("/review")
	ResponseEntity<Review> createReview(@Valid @RequestBody Review review) throws URISyntaxException {
		log.info("Request to create review: {}", review);
		Review result = reviewRepository.save(review);
		return ResponseEntity.created(new URI("/api/review/" + result.getId())).body(result);
	} 

	@PutMapping("/review/{id}")
	ResponseEntity<Review> updateGroup(@Valid @RequestBody Review review) {
		log.info("Request to update review: {}", review);
		Review result = reviewRepository.save(review);
		return ResponseEntity.ok().body(result);
	}

	@DeleteMapping("/review/{id}")
	public ResponseEntity<?> deleteGroup(@PathVariable Long id) {
		log.info("Request to delete review: {}", id);
		reviewRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
}