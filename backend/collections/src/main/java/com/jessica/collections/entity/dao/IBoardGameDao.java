package com.jessica.collections.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.jessica.collections.entity.models.BoardGame;

public interface IBoardGameDao extends CrudRepository<BoardGame, Long> {
	
}
