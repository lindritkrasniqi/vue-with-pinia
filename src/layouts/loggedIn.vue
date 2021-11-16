<template>
  <div v-if="$auth.loggedIn">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <router-link class="navbar-brand" :to="{ name: 'index' }">
          Vue 3
        </router-link>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <span
                class="nav-link dropdown-toggle"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ $auth.user.name }}
              </span>
              <ul
                class="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <hr class="my-2" />
                <li>
                  <router-link
                    class="dropdown-item text-danger"
                    :to="{ name: 'accounts-logout' }"
                  >
                    Logout
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container my-4">
      <slot />
    </div>
  </div>

  <div
    v-else
    class="container d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <slot />
  </div>
</template>