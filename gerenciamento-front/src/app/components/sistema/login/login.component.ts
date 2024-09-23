import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../../models/login/login';
import { AuthService } from '../../../services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = { login: '', password: '' };
  loginError: string = '';
  showSuccessAnimation: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  logar() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        const token = response.token;
        this.authService.saveToken(token);
        this.showSuccessAnimation = true;
        setTimeout(() => {
          this.router.navigate(['/admin/dashboard']);
        }, 1500);  // Tempo da animação
      },
      error: (err) => {
        console.error('Erro no login', err);
        this.handleLoginError(err);
      }
    });
  }

  cadastro() {
    this.router.navigate(['/cadastro']);
  }

  private handleLoginError(err: any) {
    // Ajuste essa lógica com base na estrutura da resposta de erro do seu backend
    if (err.status === 401) {  // Erro de autenticação
      this.loginError = 'Usuário ou senha incorretos';
    } else {
      this.loginError = 'Erro ao tentar fazer login. Por favor, tente novamente mais tarde.';
    }
  }
}