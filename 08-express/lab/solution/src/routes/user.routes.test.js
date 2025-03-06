import request from "supertest";
import express from "express";
import userRoutes from "./user.routes.js";
import { vi, describe, it, expect, beforeEach } from "vitest";

// Mocking the user controller
vi.mock("../controllers/user.controller.js", () => ({
	default: {
		getAllUsers: vi.fn((req, res) => res.json([{ id: 1, name: "John Doe" }])),
		createNewUser: vi.fn((req, res) => res.status(201).json({ id: 2, ...req.body })),
		getUserById: vi.fn((req, res) => res.json({ id: req.params.id, name: "Jane Doe" })),
		updateUserById: vi.fn((req, res) => res.json({ id: req.params.id, updated: true })),
		deleteUserById: vi.fn((req, res) => res.status(204).send()),
	},
}));

const app = express();
app.use(express.json());
app.use("/api/v1/users", userRoutes);

describe("User Routes", () => {
	beforeEach(() => {
		vi.clearAllMocks(); // Reset mocks before each test
	});

	it("should fetch all users (GET /api/v1/users)", async () => {
		const response = await request(app).get("/api/v1/users");

		expect(response.status).toBe(200);
		expect(response.body).toEqual([{ id: 1, name: "John Doe" }]);
	});



	it("should fetch a single user by ID (GET /api/v1/users/:id)", async () => {
		const response = await request(app).get("/api/v1/users/1");

		expect(response.status).toBe(200);
		expect(response.body).toMatchObject({ id: "1", name: "Jane Doe" });
	});

	it("should update a user (PATCH /api/v1/users/:id)", async () => {
		const response = await request(app).patch("/api/v1/users/1").send({ name: "Updated Name" });

		expect(response.status).toBe(200);
		expect(response.body).toMatchObject({ id: "1", updated: true });
	});

	it("should delete a user (DELETE /api/v1/users/:id)", async () => {
		const response = await request(app).delete("/api/v1/users/1");

		expect(response.status).toBe(204);
		expect(response.text).toBe(""); // No content expected
	});
});
