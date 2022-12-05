package com.jessica.collections.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jessica.collections.entity.models.BoardGame;
import com.jessica.collections.entity.services.IBoardGameService;

@RestController
@CrossOrigin(origins = "*")
public class BoardGameController {
	
	@Autowired
	IBoardGameService boardGameService;
	
	@GetMapping("/boardgame")
	public List<BoardGame> getAllBoardGame() {
		return boardGameService.getAll();
	}
	
	@GetMapping("/boardgame/{id}")
	public BoardGame getOne(@PathVariable(value = "id") long id) {
		return boardGameService.get(id);
	}
	
	@PostMapping("/boardgame")
	public void post(BoardGame boardGame) {
		boardGameService.post(boardGame);
	}
	
	@PutMapping("/boardgame/{id}")
	public void put(BoardGame boardGame, @PathVariable(value = "id") long id) {
		boardGameService.put(boardGame, id);
	}
	
	@DeleteMapping("/boardgame/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		boardGameService.delete(id);
	}

}
