package com.jessica.collections.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jessica.collections.entity.dao.IBoardGameDao;
import com.jessica.collections.entity.models.BoardGame;

@Service
public class BoardGameServiceImpl implements IBoardGameService{

	@Autowired
	private IBoardGameDao boardGameDao;
	
	@Override
	public BoardGame get(long id) {
		return boardGameDao.findById(id).get();
	}

	@Override
	public List<BoardGame> getAll() {
		return (List<BoardGame>) boardGameDao.findAll();
	}

	@Override
	public void post(BoardGame boardGame) {
		boardGameDao.save(boardGame);
	}

	@Override
	public void put(BoardGame boardGame, long id) {
		boardGameDao.findById(id).ifPresent((x)->{
			boardGame.setId(id);
			boardGameDao.save(boardGame);
		});
	}

	@Override
	public void delete(long id) {
		boardGameDao.deleteById(id);
	}



}
