const rewire = require("rewire")
const htmlRenderer = rewire("./htmlRenderer")
const renderEngineer = htmlRenderer.__get__("renderEngineer")
const renderIntern = htmlRenderer.__get__("renderIntern")
const renderMain = htmlRenderer.__get__("renderMain")
const replacePlaceholders = htmlRenderer.__get__("replacePlaceholders")
// @ponicode
describe("htmlRenderer", () => {
    test("0", () => {
        let callFunction = () => {
            htmlRenderer(["test_user", "b'nXQpVsglEGFJgfK'", "A1234", "c466a48309794261b64a4f02cfcc3d64", "/people/%s/@self", 7588892, "someUser", "/people/%s/@self"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            htmlRenderer(["test_user", "test_user", "fake_user_id", "c466a48309794261b64a4f02cfcc3d64", "b'nXQpVsglEGFJgfK'", "fake_user_id", "c466a48309794261b64a4f02cfcc3d64", "b'nXQpVsglEGFJgfK'"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            htmlRenderer(["test_user", "b'nXQpVsglEGFJgfK'", "/people/%s/@self", "c466a48309794261b64a4f02cfcc3d64", "A1234", "test_user", 7588892, "test_user"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            htmlRenderer(["test_user", "someUser", "fake_user", 7588892, "test_user", "A1234", "someUser", "A1234"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            htmlRenderer(["b'nXQpVsglEGFJgfK'", "A1234", 7588892, "/people/%s/@self", 7588892, "fake_user_id", "c466a48309794261b64a4f02cfcc3d64", "A1234"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            htmlRenderer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderEngineer", () => {
    test("0", () => {
        let callFunction = () => {
            renderEngineer("InnoDB")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renderEngineer("MEMORY")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renderEngineer("ARCHIVE")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renderEngineer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderIntern", () => {
    test("0", () => {
        let callFunction = () => {
            renderIntern("Nile Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renderIntern("Australian Freshwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renderIntern("Saltwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renderIntern("Spectacled Caiman")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            renderIntern("Dwarf Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            renderIntern(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderMain", () => {
    test("0", () => {
        let callFunction = () => {
            renderMain("<html> HTML </html>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renderMain("<source src=\"http://www.google.com\">")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renderMain("a<a [onclick]=\"click\">b</a>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renderMain(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("replacePlaceholders", () => {
    test("0", () => {
        let callFunction = () => {
            replacePlaceholders("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", -1, "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            replacePlaceholders("https://twitter.com/path?abc", "dummyName", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            replacePlaceholders("http://www.croplands.org/account/confirm?t=", "bar", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            replacePlaceholders("https://api.telegram.org/", 0, "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            replacePlaceholders("https://api.telegram.org/", "dummy_name", "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            replacePlaceholders(undefined, NaN, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
