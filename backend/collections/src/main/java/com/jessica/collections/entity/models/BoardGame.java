package com.jessica.collections.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "boardgame")
public class BoardGame implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	private String type;	
	private String company;
	private Integer players;	
	private String description;
	private Integer year;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Integer getPlayers() {
		return players;
	}
	public void setPlayers(Integer players) {
		this.players = players;
	}
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}	
		
	public BoardGame(String name, String type, String company, int players,
			String description, int year) {
		super();
		this.name = name;
		this.type = type;
		this.company = company;
		this.players = players;
		this.description = description;
		this.year = year;
	}
	
	public BoardGame() {
		
	}
	
}
